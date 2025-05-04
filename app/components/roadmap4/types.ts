
export interface NodeDataFromDB {
  id: string;
  materi: string;
  position_x: number;
  position_y: number;
  parent_id?: string | null;
  node_style?: { [key: string]: unknown } | null;
  type?: string | null;
  source_position?: string | null;
  target_position?: string | null;
  pencapaian?: { status: string } | null;
}

export interface EdgeDataFromDB {
  id: string;
  source_id: string;
  target_id: string;
  animated: boolean;
  type: string;
  source_handle?: string | null;
  target_handle?: string | null;
}
