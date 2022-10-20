import { LEVELS } from "./level.enum";

export class Task {
  name = "";
  description = "";
  completed = false;
  level = LEVELS.INMEDIATE;

  constructor(name, description, completed, level) {
    this.name = name;
    this.description = description;
    this.completed = completed;
    this.level = level;
  }
}