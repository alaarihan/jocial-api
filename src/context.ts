import { prisma } from './prisma'
import { PrismaClient } from '@prisma/client'
import { MercuriusContext } from 'mercurius'
import { getUserFromRequest } from './common/getUserFromRequest'

export interface Context {
  prisma: PrismaClient
  user: any
}

export interface AppContext extends MercuriusContext {
  prisma: PrismaClient
  user: any
}

export async function createContext(req, reply?): Promise<Context> {
  return {
    prisma,
    // add_context_items
    user: await getUserFromRequest(req, reply),
  }
}
