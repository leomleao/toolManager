export interface Tool {
  // TODO transform ID types to number? or specific type
  id: string;
  name: string;
  in_use: string;
  since: Date;
  created_at: Date;
}