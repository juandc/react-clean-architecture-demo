// import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req, res) {
  res.status(200).json({
    salute: 'Salute al michi',
    cosasquenonecesito: 123,
  });
}
