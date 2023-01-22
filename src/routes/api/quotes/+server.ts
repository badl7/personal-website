import type { RequestHandler } from './$types';
import {QUOTES} from './constant';

export const GET = (() => {
    return new Response(JSON.stringify(QUOTES));
}) satisfies RequestHandler;