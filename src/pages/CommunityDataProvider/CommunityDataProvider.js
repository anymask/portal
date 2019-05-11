import React from 'react'
import { connect } from 'react-redux'
import { communityDetailSelector } from 'selectors/communities'
import Breadcrumb from 'components/Breadcrumb'
import colors from 'ui/colors'
import PageContainer from 'components/PageContainer'
import ProviderList from './ProviderList'
import ToolTip from 'components/ToolTip'
import { currentUserSelector } from 'selectors/current'
import { Flex, Text } from 'ui/common'

class CommunityDataProvider extends React.Component {
  render() {
    const { user, communityAddress, name } = this.props
    return (
      <PageContainer withSidebar>
        <Breadcrumb
          links={[
            { path: `/community/${communityAddress}`, label: name },
            {
              path: `/community/${communityAddress}/governance`,
              label: 'Parameters',
            },
          ]}
        />
        <Flex flexDirection="row">
          <Flex justifyContent="center" alignItems="center">
            <Text
              mr={2}
              fontSize="18px"
              mt="16px"
              mb={3}
              fontWeight="900"
              color="#393939"
            >
              DATA PROVIDERS
            </Text>
            <ToolTip
              bg={colors.text.grey}
              width="410px"
              textBg="#b2b6be"
              textColor={colors.text.normal}
              bottom={20}
              left={20}
              tip={{ left: 21 }}
            >
              Token holders collectively curate trustworthy data providers. By
              staking their tokens, they earn a portion of fee from the
              providers. The more people stake, the more secure the data
              endpoint becomes.
            </ToolTip>
          </Flex>
        </Flex>
        <Flex mt="8px">
          <ProviderList
            user={user}
            communityAddress={communityAddress}
            pageSize={10}
          />
        </Flex>
      </PageContainer>
    )
  }
}

const mapStateToProps = (state, { communityAddress }) => {
  const community = communityDetailSelector(state, {
    address: communityAddress,
  })

  return {
    name: community.get('name'),
    address: community.get('address'),
    user: currentUserSelector(state),
  }
}

export default connect(mapStateToProps)(CommunityDataProvider)