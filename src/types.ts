export type BodyPart =
  | 'hips'
  | 'hamstrings'
  | 'quads'
  | 'glutes'
  | 'calves'
  | 'lower-back'
  | 'groin';

export interface Stretch {
  id: string;
  name: string;
  bodyPart: BodyPart;
  instructions: string;
}

export interface SessionConfig {
  bodyPart: BodyPart;
  exerciseCount: number; // 5–10
  holdSeconds: number;   // 30–120
}

export type Screen =
  | 'home'
  | 'body-part'
  | 'config'
  | 'session'
  | 'complete';
