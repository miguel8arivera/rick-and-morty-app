import { instance } from './base.api';

const endpoint: string = 'character';

export const getCharacters = {
  getAll: function ({ page }: { page: number }) {
    return instance.get(endpoint, {
      params: {
        page,
      },
    });
  },
  getOneId: ({ id }: { id: number }) => {
    return instance.get(`${endpoint}/${id}`);
  },
};
