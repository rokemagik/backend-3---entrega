import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

describe("Adoptions Router", () => {

    let adoptionId;

    it("Debe obtener todas las adopciones", async () => {

        const response = await requester.get("/api/adoptions");

        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.payload).to.be.an("array");

        adoptionId = response.body.payload[0]._id;

    });

    it("Debe obtener una adopción por ID", async () => {

        const response = await requester.get(`/api/adoptions/${adoptionId}`);

        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.payload).to.have.property("_id");

    });

    it("Debe adoptar una mascota", async () => {

        const uid = "69f888dfb0edc9571af09dda";
        const pid = "6a3c6ad94cc30a98a927a3ba";

        const response = await requester.post(`/api/adoptions/${uid}/${pid}`);

        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");

    });

});