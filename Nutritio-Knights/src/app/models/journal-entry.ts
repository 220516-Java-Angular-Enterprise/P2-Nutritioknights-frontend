import { Food } from "./food"
import { FoodEntry } from "./food-entry"

export interface JournalEntry {
    entry: FoodEntry,
    food: Food
}

