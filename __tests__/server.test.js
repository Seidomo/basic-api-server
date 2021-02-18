'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);


describe('server tests', () => {
  test('should pass a 500 error with inavalid Id', async () => {
    const response = await request.get('/food');
    expect(response.status).toEqual(500);
    expect(response.text).toEqual('Invalid ID !');
  });

  test('should create a food type on POST ', async () => {
    const response = await request.post('/food').send({
      name: 'pizza',
      type: 'Fast Food',
    });
    
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
    expect(response.body.data.name).toEqual('pizza');
  });
  

  test('should get food by Id ', async () => {
    const response = await request.get('/food/1');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });
  
 
  test('should update an existing food type', async () => {
    const response = await request.put('/food/1').send({
      name: 'salad',
      type: 'healthy',
    });
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
    expect(response.body.data.name).toEqual('salad');
  });
});

