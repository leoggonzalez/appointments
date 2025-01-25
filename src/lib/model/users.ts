import { prisma } from './prisma';

export function getUsers() {
	return prisma.user.findMany();
}
