import React, { useState } from 'react';
import { Vote } from 'lucide-react';
import PollCard from './components/PollCard';
import CreatePollForm from './components/CreatePollForm';

interface Poll {
  id: number;
  question: string;
  options: {
    id: number;
    text: string;
    votes: number;
  }[];
}

function App() {
  const [polls, setPolls] = useState<Poll[]>([
    {
      id: 1,
      question: "What's your favorite programming language?",
      options: [
        { id: 1, text: "JavaScript", votes: 0 },
        { id: 2, text: "Python", votes: 0 },
        { id: 3, text: "Java", votes: 0 },
        { id: 4, text: "TypeScript", votes: 0 },
      ],
    },
  ]);

  const handleVote = (pollId: number, optionId: number) => {
    setPolls(polls.map(poll => {
      if (poll.id === pollId) {
        return {
          ...poll,
          options: poll.options.map(option => {
            if (option.id === optionId) {
              return { ...option, votes: option.votes + 1 };
            }
            return option;
          }),
        };
      }
      return poll;
    }));
  };

  const handleCreatePoll = (question: string, optionTexts: string[]) => {
    const newPoll: Poll = {
      id: Date.now(),
      question,
      options: optionTexts.map((text, index) => ({
        id: index + 1,
        text,
        votes: 0,
      })),
    };
    setPolls([newPoll, ...polls]);
  };

  const getTotalVotes = (poll: Poll) => 
    poll.options.reduce((sum, option) => sum + option.votes, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <Vote className="w-8 h-8 text-indigo-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-900">VoteWise</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <CreatePollForm onSubmit={handleCreatePoll} />
          </div>
          
          <div className="space-y-6">
            {polls.map(poll => (
              <PollCard
                key={poll.id}
                question={poll.question}
                options={poll.options}
                totalVotes={getTotalVotes(poll)}
                onVote={(optionId) => handleVote(poll.id, optionId)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;