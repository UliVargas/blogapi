import { Request, Response } from 'express'
import { getAllTokensService } from '../services/token.service'

export const getAllTokens = async (req: Request, res: Response) => {
  const tokens = await getAllTokensService()
  res.send(tokens)
}
