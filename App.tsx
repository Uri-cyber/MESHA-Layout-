
import React, { useState } from 'react';
import { ScreenName, ForumPost } from './types';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { LoginScreen } from './screens/LoginScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { ForgotPasswordScreen } from './screens/ForgotPasswordScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { PhaseTimelineScreen } from './screens/PhaseTimelineScreen';
import { PhaseDetailsScreen } from './screens/PhaseDetailsScreen';
import { NewClaimScreen } from './screens/NewClaimScreen';
import { ClaimDetailScreen } from './screens/ClaimDetailScreen';
import { DocumentsScreen } from './screens/DocumentsScreen';
import { DocumentUploadScreen } from './screens/DocumentUploadScreen';
import { DocumentViewerScreen } from './screens/DocumentViewerScreen';
import { ContractorsScreen } from './screens/ContractorsScreen';
import { ContractorDetailScreen } from './screens/ContractorDetailScreen';
import { DeadlinesScreen } from './screens/DeadlinesScreen';
import { FormBuilderScreen } from './screens/FormBuilderScreen';
import { FormSubmissionScreen } from './screens/FormSubmissionScreen';
import { InsuranceInfoScreen } from './screens/InsuranceInfoScreen';
import { ResourcesScreen } from './screens/ResourcesScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { PersonalDetailsScreen } from './screens/PersonalDetailsScreen';
import { PropertyDetailsScreen } from './screens/PropertyDetailsScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { AdminDashboardScreen } from './screens/AdminDashboardScreen';
import { AdminUsersScreen } from './screens/AdminUsersScreen';
import { ForumFeedScreen } from './screens/ForumFeedScreen';
import { ForumPostDetailScreen } from './screens/ForumPostDetailScreen';
import { ForumCreatePostScreen } from './screens/ForumCreatePostScreen';

const MOCK_POSTS: ForumPost[] = [
  {
    id: '1',
    author: 'Mike R.',
    phaseTag: 'Phase 3',
    title: 'How long did your adjuster take to reply?',
    content: 'I filed my initial claim 4 days ago and haven’t heard back. Is this normal for State Farm? I tried calling but got voicemail.',
    likes: 12,
    comments: 5,
    timeAgo: '2h ago',
    category: 'Insurance'
  },
  {
    id: '2',
    author: 'Sarah J.',
    phaseTag: 'Phase 1',
    title: 'Feeling overwhelmed by the debris',
    content: 'Just started the cleanup process today. It feels like it never ends. Any tips for staying motivated when looking at this mess?',
    likes: 34,
    comments: 18,
    timeAgo: '5h ago',
    category: 'Support'
  },
  {
    id: '3',
    author: 'David L.',
    phaseTag: 'Phase 5',
    title: 'Recommended roofer in Miami area?',
    content: 'Looking for someone trustworthy who handles insurance paperwork well. Has anyone worked with ABC Roofing?',
    likes: 8,
    comments: 3,
    timeAgo: '1d ago',
    category: 'Repairs'
  },
  {
    id: '4',
    author: 'Emily W.',
    phaseTag: 'Phase 2',
    title: 'Water extraction companies?',
    content: 'Need recommendations for water extraction ASAP. My basement is still flooded.',
    likes: 5,
    comments: 1,
    timeAgo: '1d ago',
    category: 'Repairs'
  },
  {
    id: '5',
    author: 'Tom H.',
    phaseTag: 'Phase 4',
    title: 'Documenting personal property',
    content: 'What app are you guys using to list all damaged items? Spreadsheets are getting messy.',
    likes: 15,
    comments: 7,
    timeAgo: '2d ago',
    category: 'General'
  }
];

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('onboarding');
  
  // Forum State
  const [posts, setPosts] = useState<ForumPost[]>(MOCK_POSTS);
  const [selectedPost, setSelectedPost] = useState<ForumPost | null>(null);

  const handleAddPost = (newPost: ForumPost) => {
    setPosts([newPost, ...posts]);
    setCurrentScreen('forum-feed');
  };

  const handleSelectPost = (post: ForumPost) => {
    setSelectedPost(post);
    setCurrentScreen('forum-post');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding': return <OnboardingScreen onNavigate={setCurrentScreen} />;
      case 'login': return <LoginScreen onNavigate={setCurrentScreen} />;
      case 'register': return <RegisterScreen onNavigate={setCurrentScreen} />;
      case 'forgot-password': return <ForgotPasswordScreen onNavigate={setCurrentScreen} />;
      case 'dashboard': return <DashboardScreen onNavigate={setCurrentScreen} />;
      case 'phase-timeline': return <PhaseTimelineScreen onNavigate={setCurrentScreen} />;
      case 'phase-details': return <PhaseDetailsScreen onNavigate={setCurrentScreen} />;
      case 'new-claim': return <NewClaimScreen onNavigate={setCurrentScreen} />;
      case 'claim-detail': return <ClaimDetailScreen onNavigate={setCurrentScreen} />;
      case 'documents': return <DocumentsScreen onNavigate={setCurrentScreen} />;
      case 'document-upload': return <DocumentUploadScreen onNavigate={setCurrentScreen} />;
      case 'document-viewer': return <DocumentViewerScreen onNavigate={setCurrentScreen} />;
      case 'contractors': return <ContractorsScreen onNavigate={setCurrentScreen} />;
      case 'contractor-detail': return <ContractorDetailScreen onNavigate={setCurrentScreen} />;
      case 'deadlines': return <DeadlinesScreen onNavigate={setCurrentScreen} />;
      case 'form-builder': return <FormBuilderScreen onNavigate={setCurrentScreen} />;
      case 'form-submission': return <FormSubmissionScreen onNavigate={setCurrentScreen} />;
      case 'insurance-info': return <InsuranceInfoScreen onNavigate={setCurrentScreen} />;
      case 'resources': return <ResourcesScreen onNavigate={setCurrentScreen} />;
      case 'profile': return <ProfileScreen onNavigate={setCurrentScreen} />;
      case 'personal-details': return <PersonalDetailsScreen onNavigate={setCurrentScreen} />;
      case 'property-details': return <PropertyDetailsScreen onNavigate={setCurrentScreen} />;
      case 'notifications': return <NotificationsScreen onNavigate={setCurrentScreen} />;
      case 'admin-dashboard': return <AdminDashboardScreen onNavigate={setCurrentScreen} />;
      case 'admin-users': return <AdminUsersScreen onNavigate={setCurrentScreen} />;
      
      case 'forum-feed': return (
        <ForumFeedScreen 
          onNavigate={setCurrentScreen} 
          posts={posts} 
          onSelectPost={handleSelectPost} 
        />
      );
      case 'forum-post': return (
        <ForumPostDetailScreen 
          onNavigate={setCurrentScreen} 
          post={selectedPost} 
        />
      );
      case 'forum-create-post': return (
        <ForumCreatePostScreen 
          onNavigate={setCurrentScreen} 
          onSubmit={handleAddPost} 
        />
      );
      
      default: return <LoginScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <>
      {renderScreen()}
    </>
  );
};

export default App;