/** This file contains the tests onthe creattion of a workout */

import * as exerciseservice from "../../src/api/workout/Excercise/exercise.service";
import { app, exerciseInput, request } from "../resources/resources";

describe("Exersise controllers  Tests", () => {
  describe("given all the properties the controller should return  success, message ,and exercise object", () => {
    //@ts-ignore
    let exerciseServiceMock = jest
      .spyOn(exerciseservice, "addexerciseRepository")
      .mockResolvedValueOnce(exerciseInput);

    test("should have success , msg,exercise  fields in body", async () => {
      let exerciseCreationRes = await request(app)
        .post("/api/v1/workout/exercise")
        .send({
          ...exerciseInput,
        });
      const { success, msg, exercise } = await exerciseCreationRes.body;

      expect(success).toBe(true);
      expect(exercise).toBeTruthy;
      expect(msg).toBeTruthy;
    });
  });

  describe("given missing properties the controller should return  success, message ,and missingParams", () => {
    //@ts-ignore
    let exerciseServiceMock = jest
      .spyOn(exerciseservice, "addexerciseRepository")
      .mockResolvedValueOnce(exerciseInput);

    test("should have success , msg,exercise  fields in body", async () => {
      let exerciseCreationRes = await request(app)
        .post("/api/v1/workout/exercise")
        .send({
          field: "The object is empty ",
        });
      const { success, msg, missingParams } = await exerciseCreationRes.body;

      expect(success).toBe(false);
      expect(msg).toBe("The following params are required");
      expect(missingParams).toBeInstanceOf(Array);
    });
  });

  describe("When the service throws", () => {
    //@ts-ignore
    let exerciseServiceMock = jest
      .spyOn(exerciseservice, "addexerciseRepository")
      .mockRejectedValueOnce("I cant move !!!!");

    test("should be false", async () => {
      let exerciseCreationRes = await request(app)
        .post("/api/v1/workout/exercise")
        .send({
          ...exerciseInput,
        });
      const { success, msg } = await exerciseCreationRes.body;
      /**
       * Body to be implemented
       */
    });
  });

  /**
   * test case  2 :
   * 1.get an existing exercise
   * 2.get a non existing
   */

  describe("Fetching Exercise !!!! ", () => {
    describe("given the exerciseId", () => {
      //@ts-ignore
      let exerciseServiceMock = jest
        .spyOn(exerciseservice, "getexerciseRepository")
        .mockResolvedValueOnce(exerciseInput);

      test("should have success , msg,exercise  fields in body", async () => {
        let exerciseCreationRes = await request(app)
          .get("/api/v1/workout/exercise/6c37b303-ac2f-475a-9b14-f7308ccf77a8")
          .send({
            ...exerciseInput,
          });
        const { exercise } = await exerciseCreationRes.body;

        expect(exercise).toBeTruthy;
      });
    });

    test("with invalid id  should return false", async () => {
      let exerciseCreationRes = await request(app)
        .get("/api/v1/workout/exercise/6c37b303-ac2f-475a-9b14-f7308ccf77a8")
        .send({
          ...exerciseInput,
        });
      const { success } = await exerciseCreationRes.body;

      expect(success).toBeFalsy;
    });
  });
  /**
   * Test case 3: updating the exercise
   *
   */

  describe("Deleting  Exercises !!!! ", () => {
    describe("given valid exerciseId", () => {
      //@ts-ignore
      let exerciseServiceMock = jest
        .spyOn(exerciseservice, "deleteexerciseRepository")
        .mockResolvedValueOnce(1);
      // return  value of  1 means deleted

      test("should have success , msg,exercise  fields in body", async () => {
        let exerciseDeletionRes = await request(app).delete(
          "/api/v1/workout/exercise/e941f7d1-c65c-4995-a53f-40a0f56c4a6a"
        );

        const { success, msg } = await exerciseDeletionRes.body;
        expect(success).toBe(true);
        expect(msg).toBe("Entry  was successfully deleted");
      });
    });

    describe("given Invalid exerciseId", () => {
      //@ts-ignore
      let exerciseServiceMock = jest
        .spyOn(exerciseservice, "deleteexerciseRepository")
        .mockResolvedValueOnce(0);
      // return  value of  0 means no deleted

      test("should have success , msg,exercise  fields in body", async () => {
        let exerciseDeletionRes = await request(app).delete(
          "/api/v1/workout/exercise/e941f7d1-c65c-4995-a53f-40a0f56c4a6a"
        );

        const { success, msg } = await exerciseDeletionRes.body;
        expect(success).toBe(false);
        expect(msg).toBe("No entry was deleted please provide a valid exerciseId !!");
      });
    });
  });
});
