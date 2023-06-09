const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const {createCustomError} = require('../errors/custom-error')
const getAllTasks = asyncWrapper(async (req, res) => {
  const task = await Task.find({});
  res.status(201).json({ task });
  // res.status(201).json({ task , amount: task.length});
  // res
  //   .status(201)
  //   .json({ status: "success", data: { task, nbHits: task.length } });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    // const error = new Error("Not Found")
    // error.status = 404;
    // return next(error)
    // OR
    return next(createCustomError(  `No task with id: ${taskID}`, 404))
    // return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }
  res.status(200).json({ id: req.params.id });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(  `No task with id: ${taskID}`, 404))
    // return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }
  res.status(200).json({ task });
  // res.status(200).json({ task: null, status: 'success' });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(  `No task with id: ${taskID}`, 404))
    // return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
