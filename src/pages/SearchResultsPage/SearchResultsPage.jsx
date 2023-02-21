import { Button, Col, Row, Space } from "antd";
import React from "react";
import BaseLayout from "../../components/BaseLayout/BaseLayout";
import SearchProfileCard from "./SearchProfileCard";
import SearchResultStyles from "./searchResults.module.css";
import SimilarSeaches from "./SimilarSeaches";

function SearchResultsPage() {
  return (
    <BaseLayout>
      <Row justify="space-evenly" gutter={32}>
        <Col span={16}>
          <Space direction="vertical" size="large">
            <SearchProfileCard />
            <SimilarSeaches />
          </Space>
        </Col>
        <Col span={6}>
          <div className={SearchResultStyles.searchFilters}>
            <Space direction="vertical" size="large">
              <Button size="large" className={SearchResultStyles.searchFiltersBtn} block>Article</Button>
              <Button size="large" className={SearchResultStyles.searchFiltersBtn} block>Research Paper</Button>
              <Button size="large" className={SearchResultStyles.searchFiltersBtn} block>Article</Button>
              <Button size="large" className={SearchResultStyles.searchFiltersBtn} block>Research Paper</Button>
              <Button size="large" className={SearchResultStyles.searchFiltersBtn} block>Article</Button>
              <Button size="large" className={SearchResultStyles.searchFiltersBtn} block>Research Paper</Button>
              <Button size="large" className={SearchResultStyles.addAllFiltersBtn} block>ADD ALL FILTERS</Button>
            </Space>
          </div>
        </Col>
      </Row>
    </BaseLayout>
  );
}

export default SearchResultsPage;
