import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface CreatePollFormProps {
  onSubmit: (question: string, options: string[]) => void;
}

export default function CreatePollForm({ onSubmit }: CreatePollFormProps) {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim() && options.every(opt => opt.trim())) {
      onSubmit(question, options);
      setQuestion('');
      setOptions(['', '']);
    }
  };

  const addOption = () => {
    if (options.length < 6) {
      setOptions([...options, '']);
    }
  };

  const removeOption = (index: number) => {
    if (options.length > 2) {
      setOptions(options.filter((_, i) => i !== index));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Poll</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
            Question
          </label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="What's your question?"
            required
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Options</label>
          {options.map((option, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={option}
                onChange={(e) => {
                  const newOptions = [...options];
                  newOptions[index] = e.target.value;
                  setOptions(newOptions);
                }}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder={`Option ${index + 1}`}
                required
              />
              {options.length > 2 && (
                <button
                  type="button"
                  onClick={() => removeOption(index)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
              )}
            </div>
          ))}
        </div>

        {options.length < 6 && (
          <button
            type="button"
            onClick={addOption}
            className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Option
          </button>
        )}
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Create Poll
      </button>
    </form>
  );
}