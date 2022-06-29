import { Avatar } from "./avatar"
import { Monster } from "./monster"

export interface Fight {
    id: string
    monster_id: Monster[]
    username: Avatar[]
    fight_monster_hp: number
    fight_avatar_hp: number
    lastChecked: number
    monster_hits: number
    active: boolean
}