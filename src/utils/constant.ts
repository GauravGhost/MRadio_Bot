import { ChatCommandStringUnion, MessageCommandStringUnion } from "../interface";
import { ChatCommand, MessageCommand } from "../interface/models";

export const chatCommandMap = {
    hello: "hello",
    help: "help",
    follow: "follow",
    unfollow: "unfollow",

    relocate: "relocate",
    set: "set",

    add: "add",
    unadd: "unadd",
    allow: "allow",
    unallow: "unallow",
    enable: "enable",
    disable: "disable",

    play: "play",
    fplay: "fplay", // TODO
    playyt: "playyt",   // TODO
    playsc: "playsc", // TODO
    playjio: "playjio", // TODO
    playtop: "playtop",
    playfav: "playfav",

    queue: "queue",
    q: "q",
    skip: "skip",
    now: "now",
    next: "next",
    undo: "undo",
    fundo: "fundo",
    drop: "drop",
    dequeue: "dequeue",

    fav: "fav",
    pin: "pin",
    unfav: "unfav",
    unpin: "unpin",
    favlist: "favlist",
    pinlist: "pinlist",

    ban: "ban",
    banname: "banname",
    banlist: "banlist",
    unbanat: "unbanat",
    unbanname: "unbanname",
    unbanall: "unbanall",
} as const
export const chatCommandList = Object.keys(chatCommandMap) as ChatCommandStringUnion[];

// For Message Command Default Configuration
export const chatCommandDefaultConf: Partial<Record<ChatCommandStringUnion, Partial<ChatCommand>>> = {
    "hello": {
        canExecute: true,
        requirePermission: false,
        allowedPermission: ['creator', 'owner', 'user', 'hello'],
    },
    "follow": {
        canExecute: true,
        requirePermission: true,
        allowedPermission: ['creator', 'owner', 'moderator', 'follow'],
    },
    "unfollow": {
        canExecute: true,
        requirePermission: true,
        allowedPermission: ['creator', 'owner', 'moderator', 'unfollow']
    },
    "add": {
        canExecute: true
    },
    "unadd": {
        canExecute: true
    }
}

export const messageCommandDefaultConf: Partial<Record<MessageCommandStringUnion, Partial<MessageCommand>>> = {
    "hello": {
        canExecute: true,
        requirePermission: false,
        allowedPermission: ['user', 'hello'],
    }
}

export const messageCommandMap = {
    hello: "hello",
    balance: "balance",
    profile: "profile",
}

export const messageCommandList = Object.keys(messageCommandMap) as MessageCommandStringUnion[];

export const cacheKey = {
    userEmoteLoops: "userEmoteLoops",
    follow: "follow",
    roomId: "roomId",
    roomName: "roomName",
    ownerId: "ownerId",
    botId: "botId",
    bot: "bot",
} as const

export const RATE_LIMIT_MAX_REQUEST = 5;
export const RATE_LIMIT_TIME_WINDOW = 30;
export type CacheKey = keyof typeof cacheKey