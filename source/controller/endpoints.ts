import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

const getEvent = async (req: Request, res: Response, next: NextFunction) => {
    let eventId = req.params.eventId;

    return res.status(200).json({
        message: eventId
    });
};

export default { getEvent };
