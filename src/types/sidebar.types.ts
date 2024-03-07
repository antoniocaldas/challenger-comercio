export type RecordNote = {
  id: string;
  date: string;
  title: string;
  author: string;
  section: string;
};
type MetaData = {
  createdAt: string;
  id: string;
  name: string;
  private: boolean;
};
export type ApiData = {
  metada: MetaData;
  record: {
    notes: RecordNote[];
  };
};
