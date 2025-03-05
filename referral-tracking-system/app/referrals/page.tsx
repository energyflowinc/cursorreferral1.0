import Link from "next/link";
import { Header } from "../components/header";
import { ReferralsTable } from "../components/referrals-table";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";
import { Plus, Download, Search, Filter } from "lucide-react";

// Define the Referral type
type ReferralStatus = "Completed" | "Installation Scheduled" | "Quote Provided" | "Pending";
type RewardStatus = "Paid" | "Pending";

interface Referral {
  id: number;
  referrer: string;
  referrerLocation: string;
  referralCode: string;
  referredCustomer: string;
  referredLocation: string;
  status: ReferralStatus;
  date: string;
  rewardStatus: RewardStatus;
  amount: string;
}

export default function Referrals() {
  // Sample data - in a real application, this would come from an API
  const referrals: Referral[] = [
    { id: 1, referrer: "John Smith", referralCode: "JOHNS123456", referrerLocation: "123 Maple Street, Boston, MA 02108", referredCustomer: "Emma Johnson", referredLocation: "45 Harvard Square, Cambridge, MA 02138", status: "Completed", date: "2024-02-28", rewardStatus: "Paid", amount: "$250" },
    { id: 2, referrer: "Maria Garcia", referralCode: "MARIA234567", referrerLocation: "789 Congress Ave, Austin, TX 78701", referredCustomer: "David Brown", referredLocation: "567 Main Street, Round Rock, TX 78664", status: "Installation Scheduled", date: "2024-03-05", rewardStatus: "Pending", amount: "$250" },
    { id: 3, referrer: "Robert Wilson", referralCode: "ROBER345678", referrerLocation: "421 Pike Street, Seattle, WA 98101", referredCustomer: "Sarah Miller", referredLocation: "1200 Bellevue Way, Bellevue, WA 98004", status: "Quote Provided", date: "2024-03-01", rewardStatus: "Pending", amount: "$250" },
    { id: 4, referrer: "Jennifer Lee", referralCode: "JENNI456789", referrerLocation: "1001 Market Street, San Francisco, CA 94103", referredCustomer: "Michael Davis", referredLocation: "550 Grand Avenue, Oakland, CA 94610", status: "Completed", date: "2024-02-25", rewardStatus: "Paid", amount: "$250" },
    { id: 5, referrer: "Thomas Harris", referralCode: "THOMA567890", referrerLocation: "1644 Larimer Street, Denver, CO 80202", referredCustomer: "Elizabeth Clark", referredLocation: "1777 Broadway, Boulder, CO 80302", status: "Installation Scheduled", date: "2024-03-10", rewardStatus: "Pending", amount: "$250" },
    { id: 6, referrer: "Patricia Moore", referralCode: "PATRI678901", referrerLocation: "1022 SW Salmon Street, Portland, OR 97205", referredCustomer: "William Anderson", referredLocation: "12345 SW Canyon Road, Beaverton, OR 97005", status: "Completed", date: "2024-02-15", rewardStatus: "Paid", amount: "$250" },
    { id: 7, referrer: "James Taylor", referralCode: "JAMES789012", referrerLocation: "233 E Wacker Drive, Chicago, IL 60601", referredCustomer: "Karen Thompson", referredLocation: "800 Church Street, Evanston, IL 60201", status: "Completed", date: "2024-02-20", rewardStatus: "Paid", amount: "$250" },
    { id: 8, referrer: "Linda White", referralCode: "LINDA890123", referrerLocation: "900 Biscayne Blvd, Miami, FL 33132", referredCustomer: "Richard Martinez", referredLocation: "501 E Las Olas Blvd, Fort Lauderdale, FL 33301", status: "Quote Provided", date: "2024-03-02", rewardStatus: "Pending", amount: "$250" },
    { id: 9, referrer: "Charles Lewis", referralCode: "CHARL901234", referrerLocation: "265 Peachtree Street NE, Atlanta, GA 30303", referredCustomer: "Susan Robinson", referredLocation: "50 Barrett Parkway, Marietta, GA 30066", status: "Installation Scheduled", date: "2024-03-12", rewardStatus: "Pending", amount: "$250" },
    { id: 10, referrer: "Jessica Young", referralCode: "JESSI012345", referrerLocation: "2 E Jefferson Street, Phoenix, AZ 85004", referredCustomer: "Daniel Walker", referredLocation: "7014 E Camelback Road, Scottsdale, AZ 85251", status: "Completed", date: "2024-02-26", rewardStatus: "Paid", amount: "$250" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Title and Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Referrals</h1>
            <p className="text-gray-600">Manage your customer referrals and rewards</p>
          </div>
          <div className="flex gap-3">
            <Link href="/referrals/new">
              <Button className="gap-2">
                <Plus className="h-5 w-5" />
                Add New Referral
              </Button>
            </Link>
            <Button variant="outline" className="gap-2">
              <Download className="h-5 w-5" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="w-full sm:w-1/3">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input 
                  type="text" 
                  id="search" 
                  className="pl-10" 
                  placeholder="Search by name or code" 
                />
              </div>
            </div>
            <div className="w-full sm:w-1/4">
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <Select id="status">
                <option value="">All Statuses</option>
                <option value="completed">Completed</option>
                <option value="in_progress">Installation Scheduled</option>
              </Select>
            </div>
          </div>
        </div>

        {/* Recent Referrals */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Recent Referrals</h2>
            <Link href="/referrals" className="text-green-600 hover:underline font-medium">
              View All Referrals →
            </Link>
          </div>

          <ReferralsTable referrals={referrals} compact={true} />
        </div>
      </div>
    </div>
  );
}