import React from 'react';
import { FloatButton } from 'antd';
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MenuOutlined,
  PoweroffOutlined,
  WhatsAppOutlined,
  UpCircleOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  GithubOutlined,
} from '@ant-design/icons';
// import { Navigate } from 'react-router-dom';

const SocialMediaFloatButton = () => {
  //   let navigate = Navigate();

  const goToWebsite = (siteName) => {
    switch (siteName) {
      case 'instagram':
        window.open('https://instagram.com', '_blank');
        // navigate('https://google.com');
        break;
      case 'whatsapp':
        window.open('https://whatsapp.com', '_blank');

        break;
      case 'linkedin':
        window.open('https://linkedin.com', '_blank');

        break;
      case 'facebook':
        window.open('https://facebook.com', '_blank');

        break;
      case 'twitter':
        window.open('https://twitter.com/VirJenDB', '_blank');

        break;
      case 'github':
        window.open('https://github.com/VirJenDB/reproducibility-module', '_blank');

        break;

      case 'youtube':
        window.open('https://youtube.com', '_blank');

        break;

      default:
        break;
    }
  };
  return (
    <FloatButton.Group
      trigger="hover"
      type="primary"
      style={{ right: 10, bottom: '12%' }}
      icon={
        <div style={{ marginBottom: '4px' }}>
          <UpCircleOutlined />
        </div>
      }
    >
      {/* <FloatButton
        icon={<InstagramOutlined />}
        onClick={() => goToWebsite('instagram')}
      /> */}
      {/* <FloatButton
        icon={<WhatsAppOutlined />}
        onClick={() => goToWebsite('whatsapp')}
      /> */}
      {/* <FloatButton
        icon={<LinkedinOutlined />}
        onClick={() => goToWebsite('linkedin')}
      /> */}
      <FloatButton
        icon={<TwitterOutlined />}
        onClick={() => goToWebsite('twitter')}
      />
      {/* <FloatButton
        icon={<GithubOutlined />}
        onClick={() => goToWebsite('github')}
      />
      <FloatButton
        icon={<YoutubeOutlined />}
        onClick={() => goToWebsite('youtube')}
      /> */}
    </FloatButton.Group>
  );
};

export default SocialMediaFloatButton;
