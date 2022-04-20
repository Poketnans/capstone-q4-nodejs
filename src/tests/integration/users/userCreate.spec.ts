import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import request,{Response} from "supertest";
import app from "../../../app"
import generateUser from "./dataToUserInTests";

import connection from "../../utils/connection";

describe('Integration route user create',() => {
  
  beforeAll( async()=>{
    await connection.create();
  })
  
  afterAll(async () => {
    await connection.close();
  })
    
  it('should be able return error with body wrong',async () => {
    
    const response: Response = await 
    request(app)
      .post("/users/register")
      .send(generateUser.newUserWrongEmail())
    
    const statusCodeExpected = 400
    expect(response.statusCode).toBe(statusCodeExpected)
    const expecteMessageErrorEmail = {"error": "format invalid for email."} 
    expect(response.body).toStrictEqual(expecteMessageErrorEmail)
  
  })

})