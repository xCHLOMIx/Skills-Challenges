const Challenge = require('../models/Challenge')
const Participant = require('../models/Participants')
const mongoose=require('mongoose')
const getChallenges = async (req, res) => {
    try {
        const challenges = await Challenge.find()
        res.json(challenges)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createChallenge = async (req, res) => {
    const body = req.body
    const challenge = new Challenge({
        title: body.title,
        deadline: body.deadline,
        duration: body.duration,
        moneyPrize: body.moneyPrize,
        contactEmail:body.contactEmail,
        projectDescription: body.projectDescription,
        projectBrief: body.projectBrief,
        projectTasks: body.projectTasks,
        skills: body.skills,
        seniorityLevel: body.seniorityLevel
    })
    try {
        const newChallenge = await challenge.save()
        res.status(201).json(newChallenge)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
const getChallenge = async (req, res) => {
    const body = req.body
    const id = req.params.id
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ 
              message: 'Invalid challenge ID format' 
            });
          }
        const challenge = await Challenge.findById(id)
        res.status(201).json(challenge)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
const updateChallenge = async (req, res) => {
    const body = req.body
    const id = req.params.id
    try {
        const challenge = await Challenge.findByIdAndUpdate(id, {
          title: body.title,
          deadline: body.deadline,
          duration: body.duration,
          moneyPrize: body.moneyPrize,
          contactEmail: body.contactEmail,
          projectDescription: body.projectDescription,
          projectBrief: body.projectBrief,
          projectTasks: body.projectTasks,
          skills: body.skills,
          seniorityLevel: body.seniorityLevel,
        });
        res.status(201).json({message:'challenge updated',state:'true'})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const deleteChallenge = async (req,res) => {
    const id = req.params.id
    try {
        
        const challenge = await Challenge.findByIdAndDelete(id)
        res.status(201).json({message:'challenge delete',state:'true'})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
const joinChallenge = async (req, res) => {
    const {userId, challengeId} = req.body
    try {
        const participant = await Participant.findById(userId)
        if (!participant) {
            throw Error("Invalid user id")
        }

        const challenge = await Challenge.findById(challengeId)
        if (!challenge) {
            throw Error("Invalid challenge id")
        }

        participant.challengeId = challengeId
        const updatedParticipant = await participant.save()
                
        res.status(200).json({
            message: 'Successfully joined challenge',
            state: true,
            data: updatedParticipant
        })

    } catch (error) {
        res.status(400).json({
            message: error.message,
            state: false
        })
    }
}

module.exports = {
    getChallenges,
    createChallenge,
    getChallenge,
    updateChallenge,
    joinChallenge,
    deleteChallenge
}