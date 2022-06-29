import { Level } from "./level"

export interface Avatar {
    username: string
    gender: string
    level: Level
    xp: number
    attacks: number
}