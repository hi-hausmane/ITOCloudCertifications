import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Send } from 'lucide-react';

const EmailCaptureModal = ({ isOpen, onOpenChange, udemyLink }) => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    toast({
      title: 'Invalid Email 📧',
      description: 'Please enter a valid email address.',
      variant: 'destructive',
    });
    return;
  }

  // Show loading message
  toast({
    title: 'Saving...',
    description: 'Please wait while we save your email.',
  });

  try {
    const { error } = await supabase
      .from('emails')
      .insert([{ email }]);

    if (error) {
      console.error(error);
      toast({
        title: 'Error 😕',
        description: 'Failed to save your email. Please try again.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Success! 🎉',
      description: 'Your email has been saved. Redirecting to course...',
    });

    // Save locally too (optional)
    localStorage.setItem('userEmail', email);

    setTimeout(() => {
      window.open(udemyLink, '_blank');
      onOpenChange(false);
      setEmail('');
    }, 1500);
  } catch (err) {
    console.error(err);
    toast({
      title: 'Something went wrong!',
      description: 'Could not submit your email. Please check the console.',
      variant: 'destructive',
    });
  }
};

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-slate-800 border-slate-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text text-center">
            Get Free Course Access!
          </DialogTitle>
          <DialogDescription className="text-slate-400 text-center">
            Enter your email to get instant access to the AWS Certification Course on Udemy.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right text-slate-300">
                <Mail className="inline-block mr-1 h-5 w-5 text-blue-400" /> Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="col-span-3 bg-slate-700 border-slate-600 text-white placeholder-slate-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg font-semibold py-3"
            >
              <Send className="mr-2 h-5 w-5" /> Get Access Now
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailCaptureModal;