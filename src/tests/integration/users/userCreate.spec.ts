import { describe, expect, it } from "@jest/globals";
import request,{Response} from "supertest";
import app from "../../../app"
import generateUser from "./dataToUserInTests";

describe('Integration route user create',() => {
    
    
  it('should be able return error with body wrong',async () => {
    
    const response: Response = await 
    request(app)
      .post("users/register")
      .send(generateUser.newUserWrongEmail())
    
    const statusCodeExpected = 400
    expect(response.statusCode).toBe(statusCodeExpected)
  })

})