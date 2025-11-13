export declare module "./chats.js" {
    function log(chats: Chat[]): void;
    type Chat = {
        time: string,
        message: string,
    };
    const chats: Chat[];
}