import { Request, Response } from 'express';
import { pool } from '../db';
import { QueryResult } from 'pg';
import { createLocation, getLocationById, deleteLocation, updateLocation } from '../query/queries';
import { getServiceLocation } from '../service/service';

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await getServiceLocation();
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json(`Internal Server error : ${e}`);
    }
};

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query(getLocationById, [id]);
    return res.json(response.rows);
};

export const createUser = async (req: Request, res: Response) => {
    const { name, email } = req.body;
    const response = await pool.query(createLocation, [name, email]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: { name, email }
        }
    })
};

export const updateUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    const response = await pool.query(updateLocation, [
        name,
        email,
        id
    ]);
    res.json('User Updated Successfully');
};

export const deleteUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await pool.query(deleteLocation, [id]);
    res.json(`User ${id} deleted Successfully`);
};