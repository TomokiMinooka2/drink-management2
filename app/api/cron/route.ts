import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { DrinkVoted } from '../../lib/definitions';
import { fetchTwoteeksResult, addVoteEveryTwoWeeks, deleteVoteEveryTwoWeeks } from '@/app/lib/data';
import { NextRequest } from 'next/server';


// export async function GET() {
//     const VotedList = await fetchTwoteeksResult();
//     await addVoteEveryTwoWeeks(); // votedの中身をtotalvotedに追加
//     await deleteVoteEveryTwoWeeks(); // votedの中身を削除する
// }


export async function GET() {
    noStore();
    try {
        await sql`
            UPDATE drink
            SET voted = 0
        `;
    } catch (error) {
        return { message: 'Database Error: Failed to delete vote every two weeks' };
    }
}