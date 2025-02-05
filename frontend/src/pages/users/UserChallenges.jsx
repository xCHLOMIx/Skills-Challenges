import { Link } from "react-router-dom";
import Card from "../../components/Users/Card";
import PrimaryButton from "../../components/Users/PrimaryButton";
import { IoAdd } from "react-icons/io5";

const UserChallenges = () => {
    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <span className="text-2xl font-semibold">Challenges</span>
                    <p className="text-sm text-slate-dark">Join a challenge or a hackathon to gain valuable work experience.</p>
                </div>
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

export default UserChallenges;