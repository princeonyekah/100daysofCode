import React from 'react';
import { ChevronUp, Award, Users } from 'lucide-react';

interface Option {
  id: number;
  text: string;
  votes: number;
}

interface PollCardProps {
  question: string;
  options: Option[];
  totalVotes: number;
  onVote: (optionId: number) => void;
}

export default function PollCard({ question, options, totalVotes, onVote }: PollCardProps) {
  const getPercentage = (votes: number) => {
    if (totalVotes === 0) return 0;
    return Math.round((votes / totalVotes) * 100);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{question}</h2>
      
      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onVote(option.id)}
            className="w-full group"
          >
            <div className="relative bg-gray-50 rounded-lg p-4 hover:bg-indigo-50 transition-all duration-200">
              <div
                className="absolute left-0 top-0 h-full bg-indigo-100 rounded-lg transition-all duration-500"
                style={{ width: `${getPercentage(option.votes)}%`, opacity: 0.3 }}
              />
              <div className="relative flex items-center justify-between">
                <span className="text-gray-700 font-medium group-hover:text-indigo-600">
                  {option.text}
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    {getPercentage(option.votes)}%
                  </span>
                  <ChevronUp className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <Users className="w-4 h-4" />
          <span>{totalVotes} votes</span>
        </div>
        <div className="flex items-center space-x-1">
          <Award className="w-4 h-4" />
          <span>Top Choice: {options.reduce((a, b) => a.votes > b.votes ? a : b).text}</span>
        </div>
      </div>
    </div>
  );
}