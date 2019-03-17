import request from '@/utils/request';

export default async function getStoneDataSource(typeId, pageNum, pageSize) {
  return request(`/api/stone/query/${typeId}/${pageNum}/${pageSize}`);
}
