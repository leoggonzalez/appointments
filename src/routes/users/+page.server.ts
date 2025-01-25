import { getUsers } from '../../lib/model/users';

export const load = async () => {
	const users = await getUsers();

	return {
		users
	};
};
