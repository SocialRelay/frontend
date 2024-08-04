export type Relay = {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export type RelayList = {
  id: string
  created_at: Date
  status: "processing" | "closed"
  endAt?: Date
}