// TypeScript Types

// Specify valid values for a type with literal types
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// Create a type that must follow a specific shape
type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard"; // valid values
  level: SkillLevel; // type annotarion using our SkillLevel type
};

// We use type annotation to create a variable of SkiSchoolStudent type
const john: SkiSchoolStudent = {
  name: "John",
  age: 42,
  sport: "ski",
  level: "Advanced",
};

console.log(john);
