import type {RequestHandler} from './$types';
import {BOOKS} from './content';

export const GET = (() => {
    return new Response(JSON.stringify(BOOKS));
}) satisfies RequestHandler;