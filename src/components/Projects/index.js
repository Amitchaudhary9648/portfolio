import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From native mobile apps to hybrid mobile apps(iOS + Android). Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'ios app' ?
            <ToggleButton active value="ios app" onClick={() => setToggle('ios app')}>iOS APP'S</ToggleButton>
            :
            <ToggleButton value="ios app" onClick={() => setToggle('ios app')}>iOS APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'hybrid app' ?
            <ToggleButton active value="hybrid app" onClick={() => setToggle('hybrid app')}>HYBRID APP's</ToggleButton>
            :
            <ToggleButton value="hybrid app" onClick={() => setToggle('hybrid app')}>HYBRID APP's</ToggleButton>
          }
          <Divider />
          {toggle === 'react app' ?
            <ToggleButton active value="react app" onClick={() => setToggle('react app')}>REACT APP's</ToggleButton>
            :
            <ToggleButton value="react app" onClick={() => setToggle('react app')}>REACT APP's</ToggleButton>
          }
          <Divider />
          {toggle === 'webgl game' ?
            <ToggleButton active value="webgl game" onClick={() => setToggle('webgl game')}>Unity Game</ToggleButton>
            :
            <ToggleButton value="webgl game" onClick={() => setToggle('webgl game')}>Unity Game</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category.includes(toggle))
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects