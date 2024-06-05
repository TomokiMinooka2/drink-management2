import { lusitana } from '@/app/ui/fonts';
//import Drink from '@/app/ui/drink_vote/page';
// import { Vote } from '@/app/ui/drink_vote/page';
import Drink_info from '@/app/ui/drink_vote/drink_info';
import VoteButton from '@/app/ui/drink_vote/vote-button';
import Search from '@/app/ui/search';
import { fetchDrinkPages } from '@/app/lib/data';
import Pagination from '@/app/ui/invoices/pagination';
// import RealtimeClock from '@/app/ui/drink_vote/ShowResult';
// import TimerComponent from '@/app/ui/drink_vote/ShowResult';
// import TwoWeeksResult from '@/app/ui/drink_vote/Result';

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
        search?: string;
    };
}) {
    const query = searchParams?.query || '';
    const search = searchParams?.search || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchDrinkPages(search);
    console.log('a');
    console.log(totalPages);

    return (
        <main>
            <div>
                <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                    飲料投票ページ
                </h1>
            </div>
            <div className="md:h-200 p-4">
                <Search placeholder="Search drinks..." />
            </div>

            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Drink_info search={search} currentPage={currentPage} />
            </div>

            <VoteButton />

            <div className="mt-5 flex w-full justify-center">
                {<Pagination totalPages={totalPages} />}
            </div>

            {/* <Drink /> */}
            {/* <Vote /> */}
        </main>
    );
}
