const { default: mongoose, get } = require("mongoose")
const Work = require("../models/Work")

const getWorks = async (req, res) => {
    try {
        const works = await Work.find()
        res.json(works)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getWork = async (req, res) => {
    const id = req.params.id
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ 
              message: 'Invalid work ID format' 
            });
          }
        const work = await Work.findById(id)
        res.status(201).json(work)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const createWork = async (req, res) => {
    const body = req.body
    const work = new Work({
        repositoryUrl: body.repositoryUrl,
        challengeId: body.challengeId,
        participantId: body.participantId
    })
    try {
        const newWork = await work.save()
        res.status(201).json(newWork)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {
    createWork,
    getWork,
    getWorks
}

