import { Router } from "express";
import { generateMockUser } from "../mocks/user.mock.js";
import { generateMockPet } from "../mocks/pet.mock.js";
import { usersService, petsService } from "../services/index.js";

const router = Router();

router.get("/mockingusers", (req, res) => {

    const users = [];

    for (let i = 0; i < 50; i++) {
        users.push(generateMockUser());
    }

    res.send({
        status: "success",
        payload: users
    });

});

router.get("/mockingpets", (req, res) => {

    const pets = [];

    for (let i = 0; i < 100; i++) {
        pets.push(generateMockPet());
    }

    res.send({
        status: "success",
        payload: pets
    });

});

router.post("/generateData", async (req, res) => {

    try {

        const { users, pets } = req.body;

        for (let i = 0; i < users; i++) {
            await usersService.create(generateMockUser());
        }

        for (let i = 0; i < pets; i++) {
            await petsService.create(generateMockPet());
        }

        res.send({
            status: "success",
            message: `${users} usuarios y ${pets} mascotas creados`
        });

    } catch (error) {

        res.status(500).send({
            status: "error",
            error: error.message
        });

    }

});

export default router;