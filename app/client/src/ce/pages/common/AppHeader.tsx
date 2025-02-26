import React from "react";
import PageHeader from "pages/common/PageHeader";
import { Route, Switch } from "react-router";
import {
  VIEWER_PATH,
  BUILDER_PATH,
  SETUP,
  SIGNUP_SUCCESS_URL,
  USER_AUTH_URL,
  BUILDER_PATH_DEPRECATED,
  VIEWER_PATH_DEPRECATED,
  ADMIN_SETTINGS_CATEGORY_PATH,
  VIEWER_CUSTOM_PATH,
  BUILDER_CUSTOM_PATH,
  BASE_URL,
  CUSTOM_WIDGETS_EDITOR_ID_PATH,
  CUSTOM_WIDGETS_EDITOR_ID_PATH_CUSTOM,
} from "constants/routes";
import Navigation from "pages/AppViewer/Navigation";
import type { RouteComponentProps } from "react-router";
import AppEditorHeader from "pages/Editor/EditorHeader";
import { Header } from "pages/Editor/IDE/Header";
import { useFeatureFlag } from "utils/hooks/useFeatureFlag";
import { FEATURE_FLAG } from "@appsmith/entities/FeatureFlag";

export type Props = RouteComponentProps;

export const headerRoot = document.getElementById("header-root");

export const Routes = () => {
  const isSideBySideFlagEnabled = useFeatureFlag(
    FEATURE_FLAG.release_side_by_side_ide_enabled,
  );

  const HeaderComponent = isSideBySideFlagEnabled ? Header : AppEditorHeader;

  return (
    <Switch>
      <Route component={PageHeader} path={ADMIN_SETTINGS_CATEGORY_PATH} />
      <Route component={undefined} path={USER_AUTH_URL} />
      <Route path={SETUP} />
      <Route path={SIGNUP_SUCCESS_URL} />
      <Route component={undefined} exact path={CUSTOM_WIDGETS_EDITOR_ID_PATH} />
      <Route
        component={undefined}
        exact
        path={CUSTOM_WIDGETS_EDITOR_ID_PATH_CUSTOM}
      />
      <Route component={HeaderComponent} path={BUILDER_PATH_DEPRECATED} />
      <Route component={Navigation} path={VIEWER_PATH_DEPRECATED} />
      <Route component={HeaderComponent} path={BUILDER_PATH} />
      <Route component={HeaderComponent} path={BUILDER_CUSTOM_PATH} />
      <Route component={Navigation} path={VIEWER_PATH} />
      <Route component={Navigation} path={VIEWER_CUSTOM_PATH} />
      <Route component={PageHeader} path={BASE_URL} />
    </Switch>
  );
};
