import Image from "next/image"
import Link from "next/link"
import NavItems from "@/components/NavItems";
import UseDropdown from "./UseDropdown";
import { searchStocks } from "@/lib/actions/finnhub.actions";

const Header = async ({ user } : {user: User}) => {
  let initialStocks: StockWithWatchlistStatus[] = [];
  try {
    initialStocks = await searchStocks();
  } catch (error) {
    console.error('Failed to fetch initial stocks:', error);
  }

  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image 
            src="/assets/icons/logo.svg" 
            alt="Signalist logo" 
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>

        <nav className="hidden sm:block">
          <NavItems initialStocks={initialStocks} />
        </nav>

        <UseDropdown user={user} initialStocks={initialStocks} />
      </div>
    </header>
  )
}

export default Header