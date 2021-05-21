const Hero = require('../models/heroModel');

function heroesController() {
  const getAllHeroes = async (req, res) => {
    const query = { ...req.query };
    const heroes = await Hero.find(query);
    res.json(heroes);
  };

  const createHeroes = async (req, res) => {
    const newHero = await Hero.create({
      ...req.body,
    });
    res.json(newHero);
  };

  const getById = async (req, res) => {
    const { heroId } = req.params;
    console.log(heroId);
    const hero = await Hero.findById(heroId);
    console.log(hero);
    res.json(hero);
  };

  const updateById = async (req, res) => {
    const { heroId } = req.params;
    const hero = await Hero.findByIdAndUpdate(
      heroId,
      { ...req.body },
      { new: true, useFindAndModify: false },
    );
    res.json(hero);
  };

  const deleteHeroes = async (req, res) => {
    const { heroId } = req.params;
    await Hero.findByIdAndDelete(heroId);
    res.status(204);
    res.json();
  };

  return {
    getAllHeroes,
    createHeroes,
    getById,
    deleteHeroes,
    updateById,
  };
}

module.exports = heroesController();