import asyncHandler from 'express-async-handler'
import Department from '../models/departmentModel.js'

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const departmentController = {
    addDepartment: asyncHandler(async (req, res) => {
        let { name, description } = req.body
        console.log("🚀 ~ file: departmentController.js:11 ~ addDepartment:asyncHandler ~ req.body:", req.body)
        name = capitalize(name)
        const isExist = await Department.exists({ name: { $regex: new RegExp(name, "i") } })

        if (isExist) {
            res.status(409)
            throw new Error(`${name} department already exist`)
        }
        const deptData = await Department.create({ name, description })

        if (deptData) res.status(200).json({ msg: `${deptData.name} created successfully` })
    }),
    getAllDepartments: asyncHandler(async (req, res) => {
        const departments = await Department.find({})
        if (departments) res.status(200).json({ departments })
        else {
            res.status(500)
            throw new Error(`Nothing found`)
        }
    })
}

export default departmentController