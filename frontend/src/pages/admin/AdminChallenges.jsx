import { Link } from "react-router-dom";
import Card from "../../components/users/Card";
import PrimaryButton from "../../components/users/PrimaryButton";
import { IoAdd } from "react-icons/io5";

const AdminChallenges = () => {
    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <span className="text-2xl font-semibold">Challenges</span>
                    <p className="text-sm text-slate-dark">Join a challenge or a hackathon to gain valuable work experience.</p>
                </div>
                <Link to='/admin/newChallenge'>
                    <PrimaryButton icon={<IoAdd className="text-2xl" />} content="New Challenge" />
                </Link>
            </div>
            <div className="grid grid-cols-3 max-md:grid-cols-1 mt-4 max-lg:grid-cols-2 mb-8 gap-5 py-5">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default AdminChallenges;