const asyncHandler = require("express-async-handler")
const Notes = require("../models/noteModel")

// @desc Create New Note
// @route POST /api/notes/
// @access Private
const createNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body
  if (!title || !content) {
    res.status(400)
    throw new Error("please provide all fields")
  }
  const note = await Notes.create({
    user: req.user.id,
    title,
    content,
  })

  res.status(200).json(note)
})

// @desc Get Notes
// @route POST /api/notes/
// @access Private
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Notes.find({ user: req.user.id })
  res.status(200).json(notes)
})

// @desc Update Note
// @route PUT /api/notes/:id
// @access Private
const updateNote = asyncHandler(async (req, res) => {
  const note = await Notes.findById(req.params.id)
  if (!note) {
    res.status(400)
    throw new Error("Note not found")
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error("User Not Found")
  }

  //make sure the logged in user matches the note user
  if (note.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("User Not Authorized")
  }

  const updatedNote = await Notes.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedNote)
})

// @desc Delete Note
// @route DELETE /api/notes/:id
// @access Private
const deleteNote = asyncHandler(async (req, res) => {
  const note = await Notes.findById(req.params.id)
  if (!note) {
    res.status(400)
    throw new Error("Note not found")
  }

  // Check for user
  if (!req.user) {
    res.status(400)
    throw new Error("No user found")
  }

  // check if the note user and logged in user matches
  // note user id: note.user.toString()
  // logged in user: req.user.id
  if (note.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("User not authorized")
  }

  await note.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
}
