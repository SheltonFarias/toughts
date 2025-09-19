const { or } = require("../db/conn");
const Tought = require("../models/Tought");
const User = require("../models/User");

const { Op } = require('sequelize')

module.exports = class ToughtsController {
  static async showToughts(req, res) {

    let search = ''

    if(req.query.search) {
      search = req.query.search
    }

    let order = 'DESC'

    if(req.query.order === 'old') {
      order = 'ASC'
    } else {
      order = 'DESC'
    }

    const toughtsData = Tought.findAll({
      include: User,
      where: {
        title: {[Op.like]: `%${search}%`}
      },
      order: [['createdAt', order]]
    })

    const toughts = toughtsData.map((result) => {
      result.get({plain: true});
    });

    let toughtsQty = await toughts.length

    if(toughtsQty === 0) {
      toughtsQty = false
    }

    res.render("toughts/home", {toughts, search, toughtsQty});
  }

  static async dashboard(req, res) {
    const userId = req.session.userid;

    const user = await User.findOne({
      where: {
        id: userId,
      },
    });
    // check user exists
    if (!user) {
      res.redirect("/login");
    }

    const toughts = user.Toughts.map((result) => {
      result.dataValues;
    });

    console.log(toughts);

    let emptyTougths = false;

    if (toughts.length === 0) {
      emptyTougths = true;
    }

    res.render("toughts/dashboard", { toughts, emptyTougths });
  }

  static createTought(req, res) {
    res.render("toughts/create");
  }

  static async createToughtSave(req, res) {
    const tought = {
      title: req.body.title,
      Userid: req.session.userid,
    };

    try {
      await Tought.create(tought);

      req.flash("message", "Pensamento criado com sucesso!");

      req.session.save(() => {
        res.redirect("/toughts/dashboard");
      });

      res.render("/toughts/dashboard");
    } catch (erro) {}
  }

  static async removeTought(req, res) {
    const id = req.body.id;
    const UserId = req.session.userid;
    try {
      await Tought.destroy({ where: { id: id, UserId: UserId } });

      req.flash("message", "Pensamento removido com sucesso!");
    } catch (error) {
      console.log("aconteceu um erro" + error);
    }
  }

  static async updateTought(req, res) {
    const id = req.params.id

    const tought = await Tought.findOne({where: {id: id}, raw:true })

    res.render('toughts/edit', {tought})
  }

  static async updateToughtSave(req, res) {

    const tought = {
      title: req.body.title,
    }

    try {
      
    await Tought.update(tought, {where: { id: id}})
    req.flash("message", "Pensamento Atualizado com sucesso!");

      req.session.save(() => {
        res.redirect("/toughts/dashboard");
      });
    } catch (error) {
      console.log('aconteceu um erro' + error)
    }

  }
};
